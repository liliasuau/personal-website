import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import '../../../assets/js/smtp.js';
import {MatInputModule} from '@angular/material/input';

declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isFormValid: boolean = true;
  userEmail: any;
  userSubject: any;
  userName: any;
  userMessage: any; 
  constructor(private router: Router) { }
  data: any;

  ngOnInit() {
  }

  onSubmit(form) {
    if (!form.valid) {
        this.isFormValid = false;
    }
    else {
        this.isFormValid = true;
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'lily@greatlakesaud.com',
            Password: '72BD39ED1C3251571ADFC2A93F12E09EEE30',
            To: 'lilysuau@gmail.com',
            From: 'lily@greatlakesaud.com',
            Subject: `${this.userSubject}`,
            Body: `
            <body>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td style="padding: 35px 0 30px 0;">
                        <table bgcolor="#ffffff" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:
                        collapse;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#514c46;border-radius: 22px;
                        background-color: #f8f9fa;">
                            <tbody>
                                <tr>
                                    <td style="padding:30px 30px 20px;font-size:24px;font-weight:bold;">
                                        <img style="width:560px;height:auto; border-radius: 22px;"
                                            src="http://www.greatlakesaud.com/assets/large-images/new-message-2.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 30px;font-size:16px;font-weight:700;font-size:24px">
                                        You have a new message!
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 15px 30px; font-size:18px; font-weight: 500">
                                        From ${this.userName}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 30px 30px;font-size:16px;line-height:20px;">
                                        <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
                                            ${this.userMessage}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="260" style="padding-bottom:50px;padding-top:10px" valign="top" align="center">
                                        <a href="mailto:${this.userEmail}" style="font-family:Helvetica Neue;text-decoration:none;
                                            background-color:#374785;border-color:none;border-radius:10px;padding:12px 230px;
                                            font-size:18px;font-weight:500;color:#fff;margin-bottom:10px;border:2px solid #374785;">
                                            Respond
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
        </body> `
            }).then( (message: any) => {
              if (message == "OK") {
                this.router.navigate(['success']);
              } 
              else {
                this.onSubmit(form);
              }
              // f.resetForm(); 
            });
        }
      
    }

}
