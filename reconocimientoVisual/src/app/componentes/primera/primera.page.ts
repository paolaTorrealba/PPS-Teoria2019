import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {ListaImagenesService} from '../../servicios/lista-imagenes.service';

@Component({
  selector: 'app-primera',
  templateUrl: './primera.page.html',
  styleUrls: ['./primera.page.scss'],
})
export class PrimeraPage implements OnInit {
  imageURL
  currentImage: any;

  imageResponse: any;
  options: any;
  constructor(private camera: Camera, public listaImagenesService: ListaImagenesService, private imagePicker: ImagePicker) {}

  fotoOK(){
    const options: CameraOptions = {    
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      this.currentImage.src='data:image/jpeg;base64,' + imageData;
      this.currentImage.style.display = 'block';
      this.imageURL = imageData 
    
    
      }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
      });  
}

getImages() {
      this.options = {
        // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
        // selection of a single image, the plugin will return it.
        //maximumImagesCount: 3,

        // max width and height to allow the images to be.  Will keep aspect
        // ratio no matter what.  So if both are 800, the returned image
        // will be at most 800 pixels wide and 800 pixels tall.  If the width is
        // 800 and height 0 the image will be 800 pixels wide if the source
        // is at least that wide.
        width: 200,
        //height: 200,

        // quality of resized image, defaults to 100
        quality: 25,

        
        outputType: 1
      };
      this.imageResponse = [];
      this.imagePicker.getPictures(this.options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
        }
      }, (err) => {
        alert(err);
      });
   }

 ngOnInit(){
   this.listaImagenesService.getListaImagenes().subscribe(listaImagenes => {
    listaImagenes.map( lista =>{
      console.log(lista.payload.doc.data())
    }) 
 

   })
 }
}