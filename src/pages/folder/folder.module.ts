import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FolderPage } from './folder';
import { IonicImageViewerModule  } from "ionic-img-viewer";

@NgModule({
  declarations: [
    FolderPage,
  ],
  imports: [
    IonicPageModule.forChild(FolderPage),
    IonicImageViewerModule
  ],
})
export class FolderPageModule {}


