import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-civilsuppliesdetailedproblemstatements',
  templateUrl: './civilsuppliesdetailedproblemstatements.component.html',
  styleUrls: ['./civilsuppliesdetailedproblemstatements.component.css']
})
export class CivilsuppliesdetailedproblemstatementsComponent implements OnInit {
  statementId: any;
  object:any = [
    {
      id: 0,
    detailsDes: ``,
    outcome: ``
    },
    {
    id: 1,
    heading: 'Detecting and Mitigating Monitoring and Alteration of Duplicate Websites',
    detailsDes: `The prevalence of duplicate websites poses a significant threat to user security and privacy. Malicious actors often create duplicate versions of legitimate websites to trick users into disclosing sensitive information or downloading malware. This cyber security challenge aims to assess the effectiveness of monitoring mechanisms and propose innovative solutions to detect and mitigate the risks associated with the monitoring and alteration of duplicate websites.`,
    outcome: `
    <ul>
      <li>In-depth analysis of duplicate website creation techniques and monitoring mechanisms.</li>
      <li>Development of innovative solutions to detect and mitigate duplicate website risks.</li>
      <li>Successful testing and validation of the developed solutions using a comprehensive dataset.</li>
      <li>Development of an effective AI-based malware detection system for websites.</li>
      <li>Integration strategies for website servers or hosting platforms.</li>
      <li>Real-time monitoring and response mechanisms.</li>
      <li>Comprehensive documentation and reporting on the system's design, implementation, and evaluation.</li>
    </ul>
    `
  },
  {
    id: 2,
    heading: 'Detecting and Mitigating Phishing Emails Luring Users to Pay False Claims',
    detailsDes: `Phishing emails continue to be a prevalent cyber threat, with attackers using deceptive techniques to trick users into paying false claims or providing sensitive information. This cyber security challenge aims to assess the effectiveness of email security measures and propose innovative solutions to detect and mitigate phishing emails luring users to pay fraudulent amounts.`,
    outcome: `
    <ul>
      <li>In-depth analysis of phishing email techniques and characteristics.</li>
      <li>Development of innovative solutions to detect and mitigate phishing emails luring users to pay false claims.</li>
      <li>Implementation of awareness and education initiatives to enhance user knowledge and vigilance against phishing attacks.</li>
      </ul>`
  },
  {
    id: 3,
    heading: 'Problem Statement: Enhancing Cybersecurity for Remote 3D Printing Operations to Prevent Intellectual Property (IP) Theft',
    detailsDes: `The use of remote 3D printing operations has become increasingly popular, offering convenience and efficiency. However, this convenience also introduces security risks, as attackers may attempt to hack into the communication protocols to steal intellectual property (IP) or disrupt 3D printing processes. This cybersecurity challenge aims to design and implement robust communication protocols for remote 3D printing operations, ensuring the integrity of the commands and preventing IP theft.`,
    outcome: `
    <ul>
      <li>Secure communication protocols for remote 3D printing operations.</li>
      <li>Integration of AI for real-time detection and response to anomalous or malicious commands.</li>
      <li>Effective command validation mechanisms.</li>
      <li>User authentication and authorization procedures.</li>
      <li>Comprehensive documentation and reporting.</li>
      <li>Demonstrated functionality of the system in detecting and responding to security threats.</li>
    </ul>`
  }  
];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => this.statementId = params['id']
      );
  }

}
