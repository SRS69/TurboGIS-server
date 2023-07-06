# TurboGIS

<img src="logo.svg" height="300" alt="TurboGIS logo">

This is the **TurboGIS server** that allows groups to be organised for GIS data collection and merging (the [default merge script](add_layer.py) only allows the merging of GPKG files but [can be customised depending on the project needs](#merge-script)). Data are collected and sent using the [Turbo GIS](https://play.google.com/store/apps/details?id%253Dit.marconirovereto.turbo_gis) and [QField](https://play.google.com/store/apps/details?id%253Dch.opengis.qfield) phone apps.

The application is structured to run with [Docker Compose](https://docs.docker.com/compose/). Starting the Docker Compose will create a container with [NGINX](https://www.nginx.com/), one with the database ([PostgreSQL](https://www.postgresql.org/)) and one running the web service. You don't need to compile or build anything, all the necessary files are already present (the source code is not available, what is present is the obfuscated code).

There is an **administration interface** on the NGINX server. To access it go to `https://IP/admin` (if you go to `https://IP/` you will be redirected to `https://IP/admin`).

After you start the Docker Compose a `./projects` folder (the name of this folder is determined by the `PROJECTS_PATH` variable in the [.env](.env) file) will be created in which all the projects created, with their respective files, will be located (it is not recommended to edit, move or delete files in this folder).

## How to run

**The only software required to run the application is [Docker](https://www.docker.com/).**  
The following steps must be performed before the Docker Compose can be started:
- Generate and set the `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` in the [.env](.env) file (using 2 different secrets is recommended). These are some commands to generate secure secrets:
    - Using Node:
        ```bash
        node -e "console.log(crypto.randomBytes(128).toString('base64'))"
        ```
    - Using OpenSSL:
        ```bash
        openssl rand -base64 128
        ```
    - Using the Linux shell:
        ```bash
        shuf -i 0-255 -n 128 | xxd -p -r | base64
        ```
    - Using Powershell:
        ```powershell
        [Convert]::ToBase64String(((0..255) | Get-Random -Count 128))
        ```
- Generate a private key and a certificate for the NGINX server and put them in the `./certs` folder (the private key file name must be `turbo-cert-key.pem` and the certificate name must be `turbo-cert.pem`). To do this you can use the following command (this will generate a self-signed certificate):
    ```bash
    openssl req -newkey rsa:2048 -nodes -keyout certs/turbo-cert-key.pem -x509 -days 365 -out certs/turbo-cert.pem
    ```

After doing the previous steps you can start the Docker Compose:
```bash
docker compose up -d
```

On the first start-up the default user `admin` will exist. You can log in to the administration interface with the following default credentials:
- Username: `admin`
- Password: `TurboGis1?`

**It is strongly recommended to change the password of the admin user. To do so, log into the administration interface, go to the `Users` section, click on the admin user and change the password.**

## What is the administration interface for?
The administration interface allows you to create and manage users and projects:
- Users can be created and deleted. It is also possible to edit them and see the projects they are part of and the various measurements they have uploaded.
- Projects can be created and deleted. When a project is created, it must be passed a zip (referred to as main) containing all the [QGIS](https://www.qgis.org/en/site/) project's files. This QGIS project will be the one used and modified on the phones (the modified version will be uploaded as a user measurement). Furthermore, it is possible to edit the attributes of a project, add and remove users, view and download all uploaded measurements, select measurements to merge and [create and edit the project-specific merge script](#merge-script).


## Merge script
By default, projects use the [default merge script](add_layer.py), which only supports merging GPKG files. To create and edit the specific merge script for an individual project you have to go to the project page: if the option "Delete custom script" is not available it means that the project is using the [default merge script](add_layer.py), instead if the option is available the project is using the specific merge script, which you can edit.  
**Please note that the script is executed in the same environment in which the web service is running.**  
The web service before executing the merge script makes a copy of all the project files you need (main and measurements) in a temporary folder (`pathTmpFolder` in the [default merge script](add_layer.py)), all this to avoid overwriting the original files. Furthermore, in the temporary folder the web services creates an additional folder (`mergeFolder` in the [default merge script](add_layer.py)) in which all the merged project files are to be placed. The contents of this folder will be zipped and sent in response to the merge request.

When the web service starts the merge script it passes to it this 5 arguments (the names of the variables are those used in the [default merge script](add_layer.py)):
1. `qgis_path`: this is the path where QGIS is installed in the container.
2. `pathTmpFolder`: this is the path to the temporary folder where all the project files for the merge have been copied.
3. `mainTmpFolder`: this is the path to the folder, in the temporary folder, where all the main project files have been copied.
4. `measurementIdsString`: this is a string containing a comma-separated list of measurement IDs
5. `mergeFolder`: this is the path to the folder where the merged files will be saved.

**It is strongly recommended to use only the pathTmpFolder (which contains a copy of all main files in a specific folder and all measurements to be processed) to perform all operations.**  
Furthermore, when the web service executes the merge script, **it adds the python libraries present in the QGIS installation to the PYTHONPATH**. Thus it will be possible to use them in the merge script to perform complex operations.  
**It is recommended to see the [default script](add_layer.py) to get an example of how the various operations should be carried out.**

## Contributors
<a href="https://github.com/SRS69">
    <img src="https://avatars.githubusercontent.com/SRS69?v=4" width="50px" alt="SRS69" />
</a>
<a href="https://github.com/ElPerenza">
    <img src="https://avatars.githubusercontent.com/ElPerenza?v=4" width="50px" alt="ElPerenza" />
</a>
<a href="https://github.com/AndreaCapo3Bi">
    <img src="https://avatars.githubusercontent.com/AndreaCapo3Bi?v=4" width="50px" alt="AndreaCapo3Bi" />
</a>
<a href="https://github.com/andrea-lombardi1">
    <img src="https://avatars.githubusercontent.com/andrea-lombardi1?v=4" width="50px" alt="andrea-lombardi1" />
</a>
<a href="https://github.com/Matt-exe01">
    <img src="https://avatars.githubusercontent.com/Matt-exe01?v=4" width="50px" alt="Matt-exe01" />
</a>
