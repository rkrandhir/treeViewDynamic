# treeViewDynamic
A dynamic tree view structure based on JSON data in angular6

# Target
Need to create a dynamic tree view structure with dynamic data (data/structure may get changed)

# Technology
Angular6, JSON

# Files in use
1. assets/menu-data.json                  //data in JSON
2. service/get-data.service.ts            //service to call data
3. service/data.ts                        //Interface file
4. components/dashboard                   //Parent component
5. components/tree-view                   //Child component

# How to ...
1. Have your JSON data ready.
2. Create a service to fetch the data. Need to import {Observable} from 'rxjs'
3. Create a component "dashboard" and subscribe data from service (step 2)
4. Pass the public variable "getTreeViewData" from Parent component (dashboard) > child component (tree-view)
      <app-tree-view [parentData]='getTreeViewData'></app-tree-view>
5. Apply recursive method to inject <app-tree-view> in itself so that if any sub-item has any further category then the loop can be          iterated.  
      <pre><ul>
        <li *ngFor='let treeItem of parentData'>{{ treeItem.title }}
          <ul *ngIf='treeItem.categories.length > 0'>
            <li>
              <app-tree-view [parentData]="treeItem.categories"></app-tree-view>
            </li>
          </ul>
        </li>
      </ul></pre>
  6. Call the dashboard component in you main app i.e. app-component.
   
