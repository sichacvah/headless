package ru.championnet.app;

import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import org.json.JSONObject;


import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import java.util.ArrayList;
import android.os.Bundle;

public class MessagingService extends FirebaseMessagingService {

    private static final String TAG = "MessagingService";


    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.d(TAG, "Remote message received");
        Intent i = new Intent("com.evollu.react.fcm.ReceiveNotification");
        i.putExtra("data", remoteMessage);
        Intent r = new Intent("ru.championnet.app.ReceiveNotification");
        r.putExtra("data", remoteMessage);
        sendOrderedBroadcast(r, null);
        sendOrderedBroadcast(i, null);
    }
}
