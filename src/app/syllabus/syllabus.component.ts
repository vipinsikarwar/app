import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

  public boardList: Array<string>; 
  public classList: Array<string>;
  public subjectList: Array<string>;
  public academicYear: Array<string>;
  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.boardList = ['State Board', 'CBSE', 'ICSE', 'IGCSE'];
    this.classList = ['9th', '10th', '11th', '12th'];
    this.subjectList = ['English', 'Hindi', 'Maths', 'Computers'];
    this.academicYear = ['20011-2013', '2013-2015', '2015-2017', '2017-2019'];
  }

}
