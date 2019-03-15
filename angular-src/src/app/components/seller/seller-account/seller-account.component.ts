import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { ActivatedRoute } from '@angular/router';

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
  mainLogout: Boolean;

  seller: any;
  seller_id: String;
  seller_updatedFirstName = localStorage.getItem('sellerFirstName');
  seller_updatedLastName = localStorage.getItem('sellerLastName');
  //seller_updatedPassword: String;
  errorMessage: String;

  //for image porcessing
  selectedFile: ImageSnippet;
  updateSellerFirstName = localStorage.getItem('sellerFirstName');
  updateSellerLastName = localStorage.getItem('sellerLastName');

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute) { }

  // When the seller account page loads, the logged in seller's information will be fetched and displayed on the page.
  ngOnInit() {
    this.seller = this.route.snapshot.data['seller'];
    this.seller_id = this.seller.data._id;
    this.mainLogout = true;
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
    //(<HTMLInputElement>document.getElementById('verify')).hidden = false;
    //(<HTMLInputElement>document.getElementById('newPass')).hidden = false;
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
      //(<HTMLInputElement>document.getElementById('pwd')).disabled = true;
      (<HTMLInputElement>document.getElementById('saveBtn')).disabled = true;
      (<HTMLInputElement>document.getElementById('editBtn')).disabled = true;
      //(<HTMLInputElement>document.getElementById('verify')).hidden = true;
      //(<HTMLInputElement>document.getElementById('newPass')).hidden = true;
      //(<HTMLInputElement>document.getElementById('newPwd')).value = '';
      //(<HTMLInputElement>document.getElementById('verifyPwd')).value = '';
      //(<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'White';
      //(<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'White';
    }
    else {
      // Could not update profile
    }
  }

  // By: Omar
  // This function has not been fully implemented yet. Once this gets completed it will help tie the frontend and backend of this page together.
  updateSellerData(): Boolean {
    const newFName = (<HTMLInputElement>document.getElementById('fName')).value;
    const newLName = (<HTMLInputElement>document.getElementById('lName')).value;
    //const newPass = (<HTMLInputElement>document.getElementById('newPwd')).value;
    //const confirm = (<HTMLInputElement>document.getElementById('verifyPwd')).value;

    if (newFName === "" || newLName === "") { //|| newPass === "" || confirm === "") {
      this.errorMessage = "One of the following fields is empty! Please fill in all highlighted empty fields.";
      (<HTMLInputElement>document.getElementById('errorMessage')).style.color = "Red";
      (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
      (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'Red';
      (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'Red';
      //(<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'Red';
      //(<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'Red';
    }
    //else if (newPass !== confirm) {
      //this.errorMessage = "Passwords do not match!";
      //(<HTMLInputElement>document.getElementById('errorMessage')).style.color = "Red";
      //(<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
      //(<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'White';
      //(<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'White';
      //(<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'Red';
      //(<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'Red';
    //}
    else {
      this.seller_updatedFirstName = (<HTMLInputElement>document.getElementById('fName')).value;
      this.seller_updatedLastName = (<HTMLInputElement>document.getElementById('lName')).value;
      //this.seller_updatedPassword = confirm;
      const update = {
        "updater_id": this.seller_id,
        "fName": this.seller_updatedFirstName,
        "lName": this.seller_updatedLastName
        //"pass": this.seller_updatedPassword
      }

      this.sellerService.updateSellerProfile(update).subscribe((data: any) => {
        if (data.success) {
          localStorage.setItem('sellerFirstName', this.seller_updatedFirstName);
          localStorage.setItem('sellerLastName', this.seller_updatedLastName);
          this.updateSellerFirstName = localStorage.getItem('sellerFirstName');
          this.updateSellerLastName = localStorage.getItem('sellerLastName');

          this.errorMessage = "Account updated successfully!";
          (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
          (<HTMLInputElement>document.getElementById('cancelBtn')).hidden = true;
          (<HTMLInputElement>document.getElementById('errorMessage')).style.color = "Green";
          (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'Green';
          (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'Green';
          //(<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'Green';
          //(<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'Green';
          return true;
        }
        else {
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
    //(<HTMLInputElement>document.getElementById('pwd')).disabled = true;
    (<HTMLInputElement>document.getElementById('saveBtn')).hidden = true;
    (<HTMLInputElement>document.getElementById('editBtn')).hidden = false;
    //(<HTMLInputElement>document.getElementById('verify')).hidden = true;
    //(<HTMLInputElement>document.getElementById('newPass')).hidden = true;
    //(<HTMLInputElement>document.getElementById('newPwd')).value = '';
    //(<HTMLInputElement>document.getElementById('verifyPwd')).value = '';
    //(<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'White';
    //(<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'White';
    (<HTMLInputElement>document.getElementById('fName')).style.backgroundColor = 'White';
    (<HTMLInputElement>document.getElementById('lName')).style.backgroundColor = 'White';
  }

  // By: John
  // function for updating profile image
  processFile(imageInput: any){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.sellerService.setProfilePicture(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
}
