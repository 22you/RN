package com.myproject;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ContentUris;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;

import com.facebook.common.file.FileUtils;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.net.URISyntaxException;

/**
 * Created by jia on 2018/6/1.
 */

public class OpenFile extends ReactContextBaseJavaModule {

    public  static Callback successCallback;

    public OpenFile(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "OpenFile";
    }

    @ReactMethod
    public void getFileName(Callback successCallback){
        this.successCallback = successCallback;
        Intent intent = new Intent(getCurrentActivity(),OpenFileActivity.class);
        getCurrentActivity().startActivity(intent);

    }



}
