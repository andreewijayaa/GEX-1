import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from "angular-notifier";
import * as io from 'socket.io-client';


//class for importing image
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.css']
})

export class SellerAccountComponent implements OnInit {
  private readonly notifier: NotifierService;
  socket;
  mainLogout: Boolean;
  seller: any;
  seller_id: String;
  seller_updatedFirstName = localStorage.getItem('sellerFirstName');
  seller_updatedLastName = localStorage.getItem('sellerLastName');
  errorMessage: String;
  seller_profile_image: any;
  seller_firstName: any;
  seller_lastName: any;
  seller_email: any;
  spinner: Boolean;

  // for image porcessing
  selectedFile: ImageSnippet;
  updateSellerFirstName = localStorage.getItem('sellerFirstName');
  updateSellerLastName = localStorage.getItem('sellerLastName');

  constructor(private sellerService: SellerService,
    private notifierService: NotifierService,
    private route: ActivatedRoute) { this.notifier = notifierService; 
      if (process.env.NODE_ENV === 'development') {
        this.socket = io('http://localhost:3000');
      } else {
        this.socket = io();
      }
    }

  // When the seller account page loads, the logged in seller's information will be fetched and displayed on the page.
  ngOnInit() {
    this.spinner = false;
    this.getSellerProfile();
    this.socket.on('updatedSellerProfileInfo', ()  => {
      this.getSellerProfile();
    });
    this.mainLogout = true;
  }

  getSellerProfile() {
    this.sellerService.getSellerProfile().subscribe((data: any) => {
      if (data.success) {
        this.seller = data.seller_found;
        this.seller_id = this.seller._id;
        this.seller_profile_image = this.seller.profile_image;
        this.seller_firstName = this.seller.first_name;
        this.seller_lastName = this.seller.last_name;
        this.seller_email = this.seller.email;
      } else {
        console.log('Could not retrieve seller profile info');
      }
    });
  }

  // Function for edit button
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

  // Function for save button
  // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
  // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
  // This only works with the front end so far. This has not been tied in with the backend.
  saveFunction(): void {

    var success = this.updateSellerData();

    if (success) {
      (<HTMLInputElement>document.getElementById('pwd')).value = (<HTMLInputElement>document.getElementById('newPwd')).value;
      (<HTMLInputElement>document.getElementById('fName')).disabled = true;
      (<HTMLInputElement>document.getElementById('lName')).disabled = true;
      (<HTMLInputElement>document.getElementById('eAddress')).disabled = true;
      (<HTMLInputElement>document.getElementById('saveBtn')).disabled = true;
      (<HTMLInputElement>document.getElementById('editBtn')).disabled = true;
    } else {
      // Could not update profile
    }
  }

  updateSellerData(): Boolean {
    const newFName = (<HTMLInputElement>document.getElementById('fName')).value;
    const newLName = (<HTMLInputElement>document.getElementById('lName')).value;

    if (newFName === '' || newLName === '') {
      this.errorMessage = 'One of the following fields is empty! Please fill in all highlighted empty fields.';
      (<HTMLInputElement>document.getElementById('errorMessage')).style.color = 'Red';
      (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
      (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'Red';
      (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'Red';
    } else {
      this.seller_updatedFirstName = (<HTMLInputElement>document.getElementById('fName')).value;
      this.seller_updatedLastName = (<HTMLInputElement>document.getElementById('lName')).value;
      const update = {
        'updater_id': this.seller_id,
        'fName': this.seller_updatedFirstName,
        'lName': this.seller_updatedLastName
      };

      this.sellerService.updateSellerProfile(update).subscribe((data: any) => {
        if (data.success) {
          localStorage.setItem('sellerFirstName', this.seller_updatedFirstName);
          localStorage.setItem('sellerLastName', this.seller_updatedLastName);
          this.updateSellerFirstName = localStorage.getItem('sellerFirstName');
          this.updateSellerLastName = localStorage.getItem('sellerLastName');

          this.errorMessage = 'Account updated successfully!';
          (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
          (<HTMLInputElement>document.getElementById('cancelBtn')).hidden = true;
          (<HTMLInputElement>document.getElementById('errorMessage')).style.color = 'Green';
          (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'Green';
          (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'Green';
          (<HTMLInputElement>document.getElementById('fName')).disabled = true;
          (<HTMLInputElement>document.getElementById('lName')).disabled = true;
          (<HTMLInputElement>document.getElementById('saveBtn')).disabled = true;
          return true;
        } else {
          this.errorMessage = 'Something went wrong. Your information could not be updated. Please refresh the page and try again.';
          (<HTMLInputElement>document.getElementById('errorMessage')).style.color = 'Red';
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
  processFile(imageInput: any) {
    this.spinner = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.sellerService.setProfilePicture(this.selectedFile.file).subscribe(
        (res) => {
          this.notifier.notify('success', 'Your Image has uploaded! Login again to update');
          this.spinner = false;
        },
        (err) => {
          this.notifier.notify('error', 'Your Image has failed to upload');
          this.spinner = false;
        });
    });

    reader.readAsDataURL(file);
  }
}
