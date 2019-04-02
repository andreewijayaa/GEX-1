import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from "angular-notifier";
import { SellerAccountComponent } from '../../seller/seller-account/seller-account.component';
import * as io from 'socket.io-client';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-buyer-account',
  templateUrl: './buyer-account.component.html',
  styleUrls: ['./buyer-account.component.css']
})
export class BuyerAccountComponent implements OnInit {
  private readonly notifier: NotifierService;
  //for image porcessing
  selectedFile: ImageSnippet;

  // Delcared buyer variable.
  socket;
  buyer: any;
  buyerLogout: Boolean;
  buyer_id: String;
  buyer_updatedFirstName: any;
  buyer_updatedLastName: any;
  buyer_profile_image: any;
  buyer_firstName: any;
  buyer_lastName: any;
  buyer_email: any;
  errorMessage: String;
  spinner: Boolean;


  constructor(private buyerService: BuyerService,
    private notifierService: NotifierService,
    private route: ActivatedRoute) {this.notifier = notifierService;
      if (process.env.NODE_ENV === 'development') {
        this.socket = io('http://localhost:3000');
      } else {
        this.socket = io();
      }
    }

  // When the buyer account page loads, the logged in buyer's information will be fetched and displayed on the page.
  ngOnInit() {
    this.spinner = false;
    this.getBuyerProfile();
    this.socket.on('updatedBuyerProfileInfo', () => {
      this.getBuyerProfile();
    });
    this.buyerLogout = true;
  }

  getBuyerProfile() {
    this.buyerService.getBuyerProfile().subscribe((data:any) => {
      if (data.success) {
        this.buyer = data.buyer_found;
        this.buyer_id = this.buyer._id;
        this.buyer_profile_image = this.buyer.profile_image;
        this.buyer_firstName = this.buyer.first_name;
        this.buyer_lastName = this.buyer.last_name;
        this.buyer_email = this.buyer.email;
      } else {
        console.log('Could not fetch buyer profile info');
      }
    });
  }

  // Function enables users to use the textfields in order to edit their information.
  // This only works with the front end so far. This has not been tied in with the backend.
  editFunction(): void {
    (<HTMLInputElement>document.getElementById('fName')).disabled = false;
    (<HTMLInputElement>document.getElementById('lName')).disabled = false;
    (<HTMLInputElement>document.getElementById('eAddress')).disabled = true;
    (<HTMLInputElement>document.getElementById('saveBtn')).hidden = false;
    (<HTMLInputElement>document.getElementById('editBtn')).hidden = true;
    (<HTMLInputElement>document.getElementById('cancelBtn')).hidden = false;
  }

  // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
  // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
  // This only works with the front end so far. This has not been tied in with the backend.
  saveFunction(): void {

    var success = this.updateBuyerData();

    if (success) {
      (<HTMLInputElement>document.getElementById('fName')).disabled = true;
      (<HTMLInputElement>document.getElementById('lName')).disabled = true;
      (<HTMLInputElement>document.getElementById('eAddress')).disabled = true;
      (<HTMLInputElement>document.getElementById('saveBtn')).disabled = true;
      (<HTMLInputElement>document.getElementById('editBtn')).disabled = true;
    } else {
      // Could not update profile
    }
  }

  // By: Omar
  // This function has not been fully implemented yet. Once this gets completed it will help tie the frontend and backend of this page together.
  updateBuyerData(): Boolean {
    const newFName = (<HTMLInputElement>document.getElementById('fName')).value;
    const newLName = (<HTMLInputElement>document.getElementById('lName')).value;

    if (newFName === "" || newLName === "") { // || newPass === "" || confirm === "") {
      this.errorMessage = "One of the following fields is empty! Please fill in all highlighted empty fields.";
      (<HTMLInputElement>document.getElementById('errorMessage')).style.color = "Red";
      (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
      (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'Red';
      (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'Red';
    } else {
      this.buyer_updatedFirstName = (<HTMLInputElement>document.getElementById('fName')).value;
      this.buyer_updatedLastName = (<HTMLInputElement>document.getElementById('lName')).value;

      console.log(this.buyer_updatedFirstName);
      const update = {
        "updater_id": this.buyer_id,
        "fName": this.buyer_updatedFirstName,
        "lName": this.buyer_updatedLastName,
      }

      this.buyerService.updateBuyerProfile(update).subscribe((data: any) => {
        if (data.success) {
          this.errorMessage = "Account updated successfully!";
          (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
          (<HTMLInputElement>document.getElementById('cancelBtn')).hidden = true;
          (<HTMLInputElement>document.getElementById('errorMessage')).style.color = "Green";
          (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'Green';
          (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'Green';
          return true;
        } else {
          this.errorMessage = "Something went wrong. Your information could not be updated. Please refresh the page and try again.";
          (<HTMLInputElement>document.getElementById('errorMessage')).style.color = "Red";
        }
      });
    }
    return false;
  }

  // By: Omar
  // Function when cancel button gets pressed
  cancelButtonPressed() {
    (<HTMLInputElement>document.getElementById('errorMessage')).hidden = true;
    (<HTMLInputElement>document.getElementById('cancelBtn')).hidden = true;
    (<HTMLInputElement>document.getElementById('fName')).disabled = true;
    (<HTMLInputElement>document.getElementById('lName')).disabled = true;
    (<HTMLInputElement>document.getElementById('eAddress')).disabled = true;
    (<HTMLInputElement>document.getElementById('saveBtn')).hidden = true;
    (<HTMLInputElement>document.getElementById('editBtn')).hidden = false;
    (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'White';
    (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'White';
  }

  // By: John
  // function for updating profile image
  processFile(imageInput: any){
    this.spinner = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.buyerService.setProfilePicture(this.selectedFile.file).subscribe(
        (res) => {
          this.notifier.notify("success", "Your Image has uploaded! Login again to update");
          this.spinner = false;
        },
        (err) => {
          this.notifier.notify("error", "Your Image has failed to upload :( ");
          this.spinner = false;
        });
    });

    reader.readAsDataURL(file);
  }
}
