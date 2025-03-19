class Alarm {

  constructor(id,alarmTime,snoozeObject,days) {
    this.id = id;
    this.alarmTime = alarmTime;
    this.snoozeObject = snoozeObject;
    this.days = days;
    this.isActive = true;
    this.isStopped = false;
  }

  adjustTime(newTime) {
    this.alarmTime = newTime;
  }

  adjustDays(newDay) {
    this.days.push(newDay)
  }

  adjustID(newID) {
    this.id = newID;
  }

  stopAlarm() {
    this.isStopped = true;
  }

  get getAlarmTime() {
    return this.alarmTime
  }

  get getDays() {
    return this.days
  }
  
  get getID() {
    return this.id
  }

}

export default Alarm