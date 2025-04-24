import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statementonedetails',
  templateUrl: './statementonedetails.component.html',
  styleUrls: ['./statementonedetails.component.css']
})
export class StatementonedetailsComponent implements OnInit {
  statementId: any;
  object:any = [
    {
      id: 0,
    detailsDes: ``,
    outcome: ``
    },
    {
    id: 1,
    detailsDes: `
    Government of Andhra Pradesh delivers various services to the citizens through departments like GSWS (Village and Ward Secretariats), Transport Department, APBCL(Beverage outlets) etc. The payments made towards these services are collected via different modes of payment like cash, UPI, POS machines, etc., and each of these departments have their own payment mechanisms & later remitted into the Government Treasury in T+1/2days. In this regard, to streamline & bring in more efficiency & transparency in the process of revenue collection a digital wallet is to be developed that will be integrated to CFMS`,
    outcome: `
    An application to be developed to collect revenue at all the service delivery points through deployment of dynamic QR code that can hold cash in a digital wallet & integrate it with CFMS for remitting the amount to the Government. The payment needs to be tagged as per the department.
`
  },
  {
    id: 2,
    detailsDes: `
    The Director of Treasuries, Finance Department audits all the bills before a payment is made to the vendor. This activity is done through the CFMS portal, where each bill is processed through a pre-defined work flow i.e., a bill submitted by a certain DDO in a district is audited by the auditor belonging to the same district. This leads to imbalance in workload to the treasury officers. Hence, an automated process that is intelligent enough to measure the workload of each treasury officer and route it to treasury officers such that there can be workload balance.`,
    outcome: `
    Automate bill audit assignment to treasury officers based on the workload.`
  },
  {
    id: 3,
    detailsDes: `
    Government of Andhra Pradesh has an SAP ERP for the Treasury operations Bill life cycle management is an SAP Fiori built application used for processing the Bills. Currently a Biometric Authentication is used for Authentication. An Integration of Digital Signature in noting’s of SAP Fiori as in E office.`,
    outcome: `
    An Integration of Digital Signature in noting’s of SAP Fiori as in E office.`
  },
  {
    id: 4,
    detailsDes: `
    Detecting the fraudulent submission of the invoices to Government of Andhra Pradesh has an SAP ERP for the Treasury operations during the audit of bills. An alert should be sent to the concerned treasury officer that the same invoice has been submitted earlier by comparing all the parameters on the invoice, the data backup available for the current Invoices is from past 4 years.`,
    outcome: `
    Use of Machine Learning (NLP, Semantics) to extract data fields from PDF Files along with API to push info into core system. A utility to read and ingest any PDF documents with minimum training effort with self-services and rapid deployment capabilities Solution should be able to process readable and non-readable PDFs Solution should be able to read key elements of standardized templates e.g. Invoices, agreements, contracts etc Generate alerts to the concerned officials.`
  },
  {
    id: 5,
    detailsDes: `
    Government of Andhra Pradesh has an SAP ERP for the Treasury operations implemented across the departments. It’s a single source of truth for all data and the reporting is handled using the sap BW. An Open source tool which would help in Analyze the revenue receipts data of each department of all the past years under each category and build a decision support system that can readily be used.`,
    outcome: 

    `
    a)Forecast the revenue
    b)Flagging & Alerting authorities when there is a dip in revenue beyond certain
    threshold
    c)Interactive Dashboard
      `
  }];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => this.statementId = params['id']
      );
  }

}
