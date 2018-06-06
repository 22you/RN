//
//  getFilenName.m
//  myProject
//
//  Created by jia on 2018/6/6.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "getFilenName.h"

@implementation getFilenName

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getFileName:(RCTResponseSenderBlock)callback)
{
  NSArray *arr = [NSArray arrayWithObjects:@"字符串1", @"字符串2", @"字符串3", nil];
  NSArray *events=@[arr]; //准备回调回去的数据
  callback(@[[NSNull null],events]);
}

@end
