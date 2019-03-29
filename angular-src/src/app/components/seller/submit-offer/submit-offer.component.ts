import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SellerService } from '../../../services/seller.service';
import { NotifierService } from 'angular-notifier';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-submit-offer',
  templateUrl: './submit-offer.component.html',
  styleUrls: ['./submit-offer.component.css']
})
export class SubmitOfferComponent implements OnInit {
  private readonly notifier: NotifierService;
  id: any;
  title: String;
  description: String;
  delivery: String;
  price: Number;
  Image_Urls: [String] = [""];
  selectedFile: ImageSnippet;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute,

    private notifierService: NotifierService,
    private router: Router) {
      this.notifier = notifierService;
    }

  // On initialization process of the webpage
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id; // --> Name must match wanted parameter
      });

  }

  // Structure for submitting offer form
  submitOffer() {
    var offer;
    if (this.Image_Urls[0] == ""){
    offer = {
      title: this.title,
      description: this.description,
      price: this.price,
      request_ID: this.id
      };
    }
    else{
      offer = {
      title: this.title,
      description: this.description,
      price: this.price,
      request_ID: this.id,
      offer_pic: this.Image_Urls
      };
    }
    
    // Posting offer feature for seller, connect it to the service for back-end process
    this.sellerService.postOffer(offer).subscribe((data: any) => {
      if (data.success) { // if the data succeed to be posted
        this.notifier.notify('success', 'Your Offer was submitted!');
        this.router.navigate(['/seller']);
      } else { // if it fails
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/seller/submit-offer/' + this.id]);
      }
    });

  }

  processFile(imageInput: any) {
    //debugger;
    //console.log("Process file called in make request component");
    console.log(this.Image_Urls.length);
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      //debugger;
      this.sellerService.addOfferImage(this.selectedFile.file).subscribe(
        (res) => {
          //console.log("Image url " + res["imageUrl"]);
          if (this.Image_Urls[0] == ""){
            this.Image_Urls[0] = res["imageUrl"];
          }
          else {
            this.Image_Urls.push(res["imageUrl"]);
          }
          //this.Image_Urls.length()
          this.notifier.notify("success", "You added " + this.Image_Urls.length + " of 3 images");
          //console.log("There is no way this works inside the function " + this.Image_Urls)
          //this.Image_Urls.push(res["imageUrl"]);
          //console.log("The Image url is " + this.Image_Urls[0] );
        },
        (err) => {
          console.log("an error message");
        })
    });
    reader.readAsDataURL(file);
  }

  deleteImagesFunction(){
    if (this.Image_Urls[0] == ""){
      return this.notifier.notify("error", "There are no images to delete");
    }
    else if (this.Image_Urls.length == 1){
      //debugger;
      this.Image_Urls[0] = "";
      this.notifier.notify("success", "You now have " + 0 + " of 3 images left");
    }
    else{
      this.Image_Urls.pop();
      this.notifier.notify("success", "You now have " + this.Image_Urls.length + " of 3 images left");
    }
  }

}
