//
//  uploadViewController.m
//  myProject
//
//  Created by jia on 2018/6/6.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "uploadViewController.h"
#import "AFNetworking.h"
#import <MobileCoreServices/UTCoreTypes.h>
#import <MobileCoreServices/MobileCoreServices.h>
#import <SystemConfiguration/SystemConfiguration.h>
#import <AVFoundation/AVFoundation.h>

@interface uploadViewController ()<UIImagePickerControllerDelegate, UINavigationControllerDelegate>

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

@implementation uploadViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

//RCT_EXPORT_MODULE();
//
//RCT_EXPORT_METHOD(getFileName:(NSString *)filePath)
//{
//  UIAlertController *alertController = [UIAlertController alertControllerWithTitle:nil message:nil preferredStyle:UIAlertControllerStyleActionSheet];
//  //取消:style:UIAlertActionStyleCancel
//  UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
//  [alertController addAction:cancelAction];
//  
//  //判断应用是否使用相机权限
//  //读取媒体类型
//  NSString *mediaType = AVMediaTypeVideo;
//  //读取设备授权状态
//  AVAuthorizationStatus authStatus = [AVCaptureDevice authorizationStatusForMediaType:mediaType];
//  if (authStatus == AVAuthorizationStatusRestricted || authStatus == AVAuthorizationStatusDenied) {
//    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:@"相机已被禁用，请在系统设置里将摩派的相机权限设置为“允许”" preferredStyle:UIAlertControllerStyleActionSheet];
//    UIAlertAction *warnAction = [UIAlertAction actionWithTitle:@"知道了" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
//      NSURL *url = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
//      if ([[UIApplication sharedApplication] canOpenURL:url]) {
//        NSURL *urlString = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
//        [[UIApplication sharedApplication] openURL:urlString];
//      }
//    }];
//    [alert addAction:warnAction];
//    [self presentViewController:alert animated:YES completion:nil];
//  }
//  
//  UIAlertAction *cameraAction = [UIAlertAction actionWithTitle:@"打开相机" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
//    if ([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera]) {
//      [self openCamera];
//    } else {
//      UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:@"请在设置->隐私->相机，中开启本相机的访问权限" preferredStyle:UIAlertControllerStyleActionSheet];
//      UIAlertAction *warnAction = [UIAlertAction actionWithTitle:@"知道了" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
//        
//      }];
//      [alert addAction:warnAction];
//      [self presentViewController:alert animated:YES completion:nil];
//    }
//  }];
//  [alertController addAction:cameraAction];
//  UIAlertAction *photoAction = [UIAlertAction actionWithTitle:@"打开相册" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
//    if ([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypePhotoLibrary]) {
//      [self openPhotos];
//    } else {
//      UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:@"请在设置->隐私->照片，中开启本相机的访问权限" preferredStyle:UIAlertControllerStyleActionSheet];
//      UIAlertAction *warnAction = [UIAlertAction actionWithTitle:@"知道了" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
//        
//      }];
//      [alert addAction:warnAction];
//      [self presentViewController:alert animated:YES completion:nil];
//    }
//  }];
//  [alertController addAction:photoAction];
//  UIAlertAction *pictureLibraryAction = [UIAlertAction actionWithTitle:@"打开图库" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
//    if ([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeSavedPhotosAlbum]) {
//      [self openPictureLibrary];
//    } else {
//      UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:@"请在设置->隐私->照片，中开启本相机的访问权限" preferredStyle:UIAlertControllerStyleActionSheet];
//      UIAlertAction *warnAction = [UIAlertAction actionWithTitle:@"知道了" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
//        
//      }];
//      [alert addAction:warnAction];
//      [self presentViewController:alert animated:YES completion:nil];
//    }
//  }];
//  [alertController addAction:pictureLibraryAction];
//  [self presentViewController:alertController animated:YES completion:nil];
//}
//
//#pragma mark --点击相机事件--
////- (void)choosePhotoClick
////{
////  
////  
////}
//
//#pragma mark --跳转到相机、照片、图库里--
//
//- (void)openCamera
//{
//  pickerController.sourceType = UIImagePickerControllerSourceTypeCamera;
//  [self presentViewController:pickerController animated:YES completion:nil];
//}
//
//- (void)openPhotos
//{
//  pickerController.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
//  [self presentViewController:pickerController animated:YES completion:nil];
//}
//
//- (void)openPictureLibrary
//{
//  pickerController.sourceType = UIImagePickerControllerSourceTypeSavedPhotosAlbum;
//  [self presentViewController:pickerController animated:YES completion:nil];
//}

@end
