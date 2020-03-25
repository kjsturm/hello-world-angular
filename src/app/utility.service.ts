import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpHeaders ,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  startTime() {
    var today = new Date();
    var date = today.toLocaleDateString(); //(today.getMonth() + 1) + ' ' + today.getDate() + ' ' + today.getFullYear();
    var time = today.toLocaleTimeString();

    let zone =this.getTimezoneName();

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    zone = 
        zone.length>0?
        zone:tz;

    // document.getElementById('time').innerHTML = date  + ' ' + time + ' ' + zone;     

    //var t = setTimeout(startTime, 500);
}

checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

 getTimezoneName() {
    const today = new Date();
    const short = today.toLocaleDateString(undefined);
    const full = today.toLocaleDateString(undefined, { timeZoneName: 'long' });

    // Trying to remove date from the string in a locale-agnostic way
    const shortIndex = full.indexOf(short);
    if (shortIndex >= 0) {
        const trimmed = full.substring(0, shortIndex) + full.substring(shortIndex + short.length);
        
        // by this time `trimmed` should be the timezone's name with some punctuation -
        // trim it from both sides
        return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');

    } else {
        // in some magic case when short representation of date is not present in the long one, just return the long one as a fallback, since it should contain the timezone's name
        return full;
    }
}

relPathToAbs (sRelPath) {
    var nUpLn, sDir = "", sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
    for (var nEnd, nStart = 0; nEnd = sPath.indexOf("/../", nStart), nEnd > -1; nStart = nEnd + nUpLn) {
        nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
        sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((nUpLn - 1) / 3) + "}$"), "/");
    }
    return sDir + sPath.substr(nStart);
    }

}
