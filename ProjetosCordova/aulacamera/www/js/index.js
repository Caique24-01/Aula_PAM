/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
/*let options2 = {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    allowEdit: true,
    saveToPhotoAlbum: false,
    cameraDirection: 1,
    sourceType: Camera.PictureSourceType.CAMERA
};*/

function onDeviceReady() {
    let btnTirarFoto = document.getElementById("btnTirarFoto");
    btnTirarFoto.addEventListener('click', tirarFoto);
}
function tirarFoto(){
            if (!navigator.camera) {
                alert("Plugin Cordova da Camera nao Instalado", "Erro!!!");
                return;
            }
    var options =   {   quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
            encodingType: 0     // 0=JPG 1=PNG
            };   
    let options2 = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: true,
        saveToPhotoAlbum: false,
        cameraDirection: 1,
        sourceType: Camera.PictureSourceType.CAMERA
    }
    navigator.camera.getPicture(
        function(imgData){
            var  imgHtmlTag  =  document . getElementById ( "imgHtmlTag" ) ;
            alert ( imgHtmlTag ) ;
            imgHtmlTag . src  =  "dados: imagem / jpeg; base64," + imgData ;
        }, 
        function (err){
            alert(err);
        },
        options);
}