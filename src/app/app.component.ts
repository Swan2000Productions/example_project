import { Component, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import * as speakeasy from "speakeasy";
import * as QRCode from 'qrcode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  selection = { value: '' };
  title = 'example_project';
  name = '';
  name2 = "";
  secretkey = '';
  status = false;
  @ViewChild('imgContainer', { static: false }) imgContainer?: ElementRef;
  private intervalId: any;

  constructor(private renderer: Renderer2) {}

  getCode(){
    return speakeasy.totp({
      secret: this.secretkey,
      encoding: "ascii"
    });
  }

  ngOnInit(){
    console.log('AppComponent initialized');

    const secret = speakeasy.generateSecret();
    this.secretkey = secret.ascii;

    //this.mysecret = speakeasy.generateSecret({length:3});
    //, label: 'MY Secret'

    console.log(`Generated Secret: ${this.secretkey}`);
    const url = speakeasy.otpauthURL({ secret: this.secretkey, label: "DKPaSS"});
    console.log(`Generated OTP URL: ${url}`);
    this.drawQr(url);

    this.intervalId = setInterval(()=>{
      this.name2 = this.getCode();
      console.log(`Generated Code: ${this.name2}`);
    },1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  drawQr(url: string){
    QRCode.toDataURL(url).then((data_url) => {
      // console.log(data_url);
      // Display this data URL to the user in an <img> tag
      // Example:
      const img = this.renderer.createElement('img');
      this.renderer.setAttribute(img, 'src', data_url);
      if (this.imgContainer?.nativeElement) {
      this.renderer.appendChild(this.imgContainer.nativeElement, img);
      }
    }).catch((err: any) => console.error('Error generating QR Code:', err));
  }

  verify(){
    // console.log(this.mysecret);
    // console.log(speakeasy.totp.verify({secret: this.secret.ascii, encoding: 'ascii',token: this.name.toString()}));
    this.status = speakeasy.totp.verify({secret: this.secretkey, encoding: 'ascii',token: this.name.toString()});
  console.log(this.status);
  }
}
