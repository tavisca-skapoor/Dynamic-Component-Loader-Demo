import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trial';

  constructor(private http: HttpClient) { }
  
  addDependency() {
    console.log("Adding Dependency");
    var dependencyData ={
      compName: "Dynamic2Component",
      moduleName: "../dynamic2/dynamic2.component"
    }
    this.http.post('http://localhost:3000/posts/check',dependencyData).subscribe((response) => {
      console.log(response);
    });
  }
}
