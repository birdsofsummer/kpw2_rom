#!/bin/sh
source /etc/upstart/functions

LOG_MODULE=`basename "$0"`
if [ "$(f_platform)" = "rex" ]; then
    {
        echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor;
        f_log I "$LOG_MODULE" "registrationChanged" "Switched to performance mode";
        sleep 10;
        echo ondemand > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor;
        f_log I "$LOG_MODULE" "registrationChanged" "Switched to ondemand mode";
    } &
fi
sh /usr/bin/lipcd-scripts/lipc-events/wifiLocker.sh $1 $3 
