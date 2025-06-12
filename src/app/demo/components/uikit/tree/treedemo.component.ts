import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/demo/service/node.service';
import { TreeNode } from 'primeng/api';

@Component({
  templateUrl: './treedemo.component.html',
})
export class TreeDemoComponent implements OnInit {
  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  selectedFiles1: TreeNode<any> | TreeNode<any>[] | null = [];

  selectedFiles2: TreeNode<any> | TreeNode<any>[] | null = [];

  selectedFiles3: TreeNode<any> | TreeNode<any>[] | null = {};

  cols: any[] = [];

  constructor(private nodeService: NodeService) {}

  async ngOnInit() {
    this.files1 = await this.nodeService.getFiles();
    this.files2 = await this.nodeService.getFilesystem();
    const files = await this.nodeService.getFiles();
    this.files3 = [
      {
        label: 'Root',
        children: files,
      },
    ];

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
