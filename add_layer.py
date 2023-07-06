import shutil
from sys import argv
from os import listdir, path, environ
import subprocess
from osgeo_utils import ogrmerge

# Useful libraries:
# PyQGIS: https://docs.qgis.org/3.28/en/docs/pyqgis_developer_cookbook/index.html (https://qgis.org/pyqgis/3.0/)
# osgeo: https://gdal.org/api/index.html#python-api

#ARGS
qgis_path = argv[1] #path where qgis is installed
pathTmpFolder = argv[2] #path of the temporary folder where all the project files (main and measurements) have been copied for the merge (to avoid overwriting the original files)
mainTmpFolder = argv[3] #path of the temporary folder where all the project main files (extracted from the zip) has been copied for the merge
measurementIdsString = argv[4].split(",") #list of the measurement IDs to merge
mergeFolder = argv[5] #path of the folder where the merged files will be saved (this folder will be zipped and sent as the result of the merge)


#Look in every measurement folder, take the first .gpkg file, save it in a list and copy the DCIM folder content in the merge DCIM folder
gpkgFiles = []
for measurementId in measurementIdsString:
    measurementFolder = pathTmpFolder+"/"+measurementId
    for file in listdir(measurementFolder):
        if file.endswith(".gpkg"):
            gpkgFiles.append(measurementFolder+"/"+file)
            break


#Look in the main folder and take the first .gpkg file
gpkgMain = ""
for file in listdir(mainTmpFolder):
    if file.endswith(".gpkg"):
        gpkgMain = mainTmpFolder+"/"+file
        break

#Merge all the .gpkg files in the main .gpkg file using the ogrmerge python script
gpkgFiles.insert(0, gpkgMain)
merge = subprocess.run(["python3", ogrmerge.__file__, "-o", gpkgMain, *gpkgFiles, "-append"], env=environ.copy())

#If the merge is not successful exit the script throwing an error
if merge.returncode != 0:
    exit(1)

# copy all the file of the main folder in the merge folder
shutil.copytree(mainTmpFolder, mergeFolder, dirs_exist_ok=True)

# copy all the DCIM folder of the measurement folder in the merge folder
for measurementId in measurementIdsString:
    measurementFolder = pathTmpFolder+"/"+measurementId
    for file in listdir(measurementFolder):
        if file == "DCIM":
            shutil.copytree(measurementFolder+"/DCIM", mergeFolder+"/DCIM", dirs_exist_ok=True)
            break

#Copy again the DCIM main folder in the merge folder (to be safe from images overwriting)
if path.exists(mainTmpFolder+"/DCIM"):
    shutil.copytree(mainTmpFolder+"/DCIM", mergeFolder+"/DCIM", dirs_exist_ok=True)