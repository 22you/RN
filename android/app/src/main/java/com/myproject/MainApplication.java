package com.myproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.BV.LinearGradient.LinearGradientPackage;
=======
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
import com.beefe.picker.PickerViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import com.imagepicker.ImagePickerPackage;   //导包

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new LinearGradientPackage(),
=======
>>>>>>> f9985f843589a513678c9b67bd7993b9fb3dcf4d
            new PickerViewPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
            new ImagePickerPackage() 
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
