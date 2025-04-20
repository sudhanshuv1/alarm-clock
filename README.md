# Alarm Clock

An alarm clock app using React and TailwindCSS. This project is live at: https://alarmclock-app.netlify.app<br>

It allows the user to set and delete alarms. Additional features:
<ul>
    <li> Shows current time in analog and digital clock. </li>
    <li> User can set an alarm in 24-hour time format. </li>
    <li> When the alarm rings, the user can click on any of the two buttons: 
    <ol type="1">
    <li><strong>STOP</strong>: This stops the alarm.</li>
    <li><strong>SNOOZE</strong>: This will snooze the alarm, <i>i.e.</i>, the alarm will ring again after 2 minutes. The user can snooze 4 times, after which the alarm stops automatically.</li>
    </ol>
    <li> If no button is clicked within 1 minute since the alarm started ringing, it snoozes automatically (and stops on the fourth snooze). 
    </li>
</ul>

