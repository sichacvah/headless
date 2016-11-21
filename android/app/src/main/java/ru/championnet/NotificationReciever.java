package ru.championnet.app;

import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import com.facebook.react.HeadlessJsTaskService;
import java.util.Set;

import com.google.firebase.messaging.RemoteMessage;


public class NotificationReciever extends BroadcastReceiver {
  public static final String LOG_TAG = "NotificationReciever";

  @Override
  public void onReceive(Context context, Intent intent) {
    Log.i(LOG_TAG, "yipikaye mutherf**r");
    Intent service = new Intent(context.getApplicationContext(), NotificationControlService.class);
    RemoteMessage message = intent.getParcelableExtra("data");
    service.putExtra("data", message.getData().toString());
    context.getApplicationContext().startService(service);
  }
}
