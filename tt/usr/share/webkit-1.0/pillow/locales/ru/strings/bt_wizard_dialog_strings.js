/*
 * bt_wizard_dialog_strings.js
 *
 * Copyright (c) 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * PROPRIETARY/CONFIDENTIAL
 *
 * Use is subject to license terms.
 */

// string map for default mode
var BTWizardDialogStringTable = {
    switchDialogButtonLayout: BUTTON_LAYOUT_NORMAL,
    btWizardTitle: new MessageFormat("Bluetooth \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e ({numDevices,number,integer})"),
    subtitle: new MessageFormat("\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 ({numDevices,number,integer})"),
    btWizardHeaderText: "\u0427\u0442\u043e\u0431\u044b \u0441\u043b\u0443\u0448\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0438 Audible \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0447\u0442\u0435\u043d\u0438\u044f \u0441 \u044d\u043a\u0440\u0430\u043d\u0430 VoiceView, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043e\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u0441 \u0430\u0443\u0434\u0438\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u043c Bluetooth.",
    rescan: "\u041f\u041e\u0412\u0422. \u041f\u041e\u0418\u0421\u041a",
    rescanDescription: "\u041f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432",
    pairNewDevice: "\u041c\u0410\u0421\u0422\u0415\u0420 BLUETOOTH",
    pairNewDeviceDescription: "\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0430\u0443\u0434\u0438\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
    disconnect: "\u041e\u0422\u041a\u041b\u042e\u0427\u0418\u0422\u042c",
    other: "\u0414\u0420\u0423\u0413\u041e\u0415\u2026",
    connect: "\u041f\u041e\u0414\u041a\u041b\u042e\u0427\u0418\u0422\u042c\u0421\u042f",
    cancel: "\u041e\u0422\u041c\u0415\u041d\u0410",
    btWizardforgetDevice: "\u0417\u0410\u0411\u042b\u0422\u042c",
    btPairedDeviceforgetDevice: "\u0417\u0410\u0411\u042b\u0422\u042c \u0423\u0421\u0422\u0420\u041e\u0419\u0421\u0422\u0412\u041e",
    tryAgain: "\u041f\u041e\u0412\u0422\u041e\u0420\u0418\u0422\u042c \u041f\u041e\u041f\u042b\u0422\u041a\u0423",
    btWizardForgetDeviceTitle: new MessageFormat("{device}"),
    btPairedDeviceForgetDeviceTitle: "\u0417\u0430\u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",
    btWizardErrorDeviceTitle: {
        Bond : "\u041f\u043e\u0434\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 Bluetooth \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",
        Connect : "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a Bluetooth"
    },
    noDeviceDiscovered: "\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b.",
    passcodeTitle: "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u043a\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443",
    connectOrForgetDevice: new MessageFormat("{string}"),
    switchTextMessageFormat: new MessageFormat("\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 \"{string}\" \u0438\u043b\u0438 \u0437\u0430\u0431\u044b\u0442\u044c \u0435\u0433\u043e?"),
    btPairedWizardForgetTextMessageFormat: new MessageFormat("\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 {string}."),
    btWizardForgetTextMessageFormat: new MessageFormat("\u041e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \"{string}\" \u0438\u043b\u0438 \u0437\u0430\u0431\u044b\u0442\u044c \u0435\u0433\u043e?"),
    forgetConfirm: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u0431\u044b\u0442\u044c \u044d\u0442\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e?<br><br>\u042d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0447\u0442\u0435\u043d\u0438\u044f \u0441 \u044d\u043a\u0440\u0430\u043d\u0430 VoiceView. <br><br>\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043d\u043e\u0432\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c VoiceView, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0438\u0442\u0430\u043d\u0438\u044f \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 9 \u0441\u0435\u043a\u0443\u043d\u0434, \u0437\u0430\u0442\u0435\u043c \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 2 \u043f\u0430\u043b\u044c\u0446\u0430 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 Kindle.",
    btWizardErrorTextMessageFormat: {
       Bond :  new MessageFormat("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0430\u0443\u0434\u0438\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 Bluetooth  \"{string}\".<br/><br/>\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043f\u0440\u0438\u0431\u043e\u0440 \u0432\u043a\u043b\u044e\u0447\u0435\u043d \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u044f."),
       Connect :  new MessageFormat("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0430\u0443\u0434\u0438\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 Bluetooth  \"{string}\".<br/><br/>\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0434\u043e\u0441\u044f\u0433\u0430\u0435\u043c\u043e\u0441\u0442\u0438."),
    },
    passKeyComparisonTitle: "\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u0434\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 Bluetooth ",
    passKeyTextMessageFormat: new MessageFormat('"{string}" \u0436\u0435\u043b\u0430\u0435\u0442 \u043f\u043e\u0434\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 Kindle. \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0447\u0438\u0441\u043b\u043e, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0435 \u043d\u0438\u0436\u0435, \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 "{string}"'),
    confirm: "\u041f\u041e\u0414\u0422\u0412\u0415\u0420\u0414\u0418\u0422\u042c",
    scanningForBTDevices: "\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0438\u0441\u043a Bluetooth \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432",
    connectingToBtDevice: "\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
    pairingToBtDevice: "\u041f\u043e\u0434\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"
};

// string map for large mode
var BTWizardDialogStringTableLarge = {
    rescan: "\u041f\u043e\u0432\u0442. \u043f\u043e\u0438\u0441\u043a",
    pairNewDevice: "\u041c\u0430\u0441\u0442\u0435\u0440 Bluetooth",
    disconnect: "\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c",
    other: "\u0414\u0440\u0443\u0433\u043e\u0435",
    tryAgain: "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0443",
    cancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
    connect: "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f",
    btWizardforgetDevice: "\u0417\u0430\u0431\u044b\u0442\u044c",
    btPairedDeviceforgetDevice: "\u0417\u0430\u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",
    confirm: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"
};

//checks for large mode and constructs BTPairedDeviceStringTable based on the display mode
BTWizardDialogStringTable = constructTableOnDisplayModeChange(BTWizardDialogStringTable, BTWizardDialogStringTableLarge);

var BTAccessibilityStringTable = {
    close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c"
};
