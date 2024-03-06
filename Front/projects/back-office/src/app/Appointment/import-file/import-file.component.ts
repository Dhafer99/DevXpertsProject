import { Component } from '@angular/core';
import { en } from '@fullcalendar/core/internal-common';
import *as XLSX from 'xlsx';
@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})
export class ImportFileComponent {

  /* ReadExcel($event) */
   
ExcelData:any;
  
  ReadExcel(event:any){

    let file = event.target.file[0];
    let fileReader=  new FileReader();
    fileReader.onload = (e)=>{

      var workBook = XLSX.read(fileReader.result,{type:'binary'});
      var sheetNames = workBook.SheetNames;
     this.ExcelData= XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames [0]])
      console.log(this.ExcelData)
    }
  }


}
