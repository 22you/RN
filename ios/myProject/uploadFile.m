//
//  uploadFile.m
//  myProject
//
//  Created by jia on 2018/6/6.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "uploadFile.h"
#import "AFNetworking.h"
#import <MobileCoreServices/UTCoreTypes.h>
#import <MobileCoreServices/MobileCoreServices.h>
#import <SystemConfiguration/SystemConfiguration.h>
#import <AVFoundation/AVFoundation.h>

@interface uploadFile ()<UIImagePickerControllerDelegate, UINavigationControllerDelegate>

{
  //把图片存放在字典里
  NSMutableDictionary *dic;
  //判断图片的个数
  NSInteger count1;
  //单例
  //    HHImageSingleton *singletom;
  
  //初始化图片控制器
  UIImagePickerController *pickerController;
  
}

@end

@implementation uploadFile

//RCT_EXPORT_MODULE(getFilenName);
//
//RCT_EXPORT_METHOD(getFilenName:(NSString *)filePath)
//{
//  
//}



@end
