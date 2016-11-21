package ru.championnet.app;

import com.facebook.react.jstasks.HeadlessJsTaskEventListener;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.jstasks.HeadlessJsTaskContext;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import javax.annotation.Nullable;
import android.util.Log;
import android.content.Intent;
import android.os.Bundle;

public class NotificationControlService extends HeadlessJsTaskService {
  public static final String LOG_TAG = "NotificationControlService";


  @Override
  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    if (extras != null) {
      return new HeadlessJsTaskConfig(
          "MessagingService",
          Arguments.fromBundle(extras),
          0);
    }
    return null;
  }
}
