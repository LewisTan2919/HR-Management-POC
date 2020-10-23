import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor() { }

  defaultUrl='https://lewisphotoes.s3.us-east-2.amazonaws.com/default.png'

  fileUpload(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: '',
              secretAccessKey: '',
              region: 'us-east-2',
            
          }
      );
      const params = {
          Bucket: 'lewisphotoes',
          Key:  file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };


      return bucket.upload(params, function (err, data) {
          if (err) {
              console.log('EROOR: ',JSON.stringify( err));
              alert('photo upload fails')
          }
      }).promise()
    }
}
