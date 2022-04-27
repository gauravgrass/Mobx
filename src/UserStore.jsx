import { makeObservable, observable, computed, action, flow, autorun, runInAction } from "mobx"

class UserStore{
    userInfo = {
        id:'CS117',
        name:'Code',
        subject:['Math','English','Hindi']
    }

    constructor(){
        makeObservable(this, {
            userInfo: observable,
            totalSubject:computed,
            updateUser:action,
            addSubject:action
        })
        autorun(this.logUserDetails);
        runInAction(this.prefetchData);
    }

    get totalSubject(){
        console.log('getter')
        return this.userInfo.subject.length;
    }
    logUserDetails=()=>{
        console.log('Subject Length is:'+this.totalSubject+'Name:'+this.userInfo.name)
    }
    updateUser(name){
    return this.userInfo.name=name;
    }

    prefetchData=()=>{
        console.log('run in action')
    }
    addSubject(data){
        return this.userInfo.subject = [...this.userInfo.subject,data]
    }
}

export default UserStore