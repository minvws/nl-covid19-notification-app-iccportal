// Copyright 2020 De Staat der Nederlanden, Ministerie van Volksgezondheid, Welzijn en Sport.
// Licensed under the EUROPEAN UNION PUBLIC LICENCE v. 1.2
// SPDX-License-Identifier: EUPL-1.2

import { DatePipe } from '@angular/common';
import { DateHelper } from '../helpers/date.helper';

// The Index is the person having a test or having symptoms or both contacting the GGD
export class IndexData {
    constructor(symptomaticIndexDayOffset: number, asymptomaticIndexDayOffset: number, dateHelper: DateHelper) {
        this.symptomaticIndexDateOffset = symptomaticIndexDayOffset;
        this.asymptomaticIndexDateOffset = asymptomaticIndexDayOffset;
        this.dateHelper = dateHelper;

        for (let i = 0; i < 7; i++) {
            this.GGDKeyValidState[i] = null;
        }
    }

    public GGDKey: Array<string> = ['', '', '', '', '', '', ''];
    public GGDKeyValidState: { [key: number]: boolean } = [];

    dateHelper: DateHelper;
    datePipe: DatePipe;

    // All allowd characters for the GGDKey
    allowedChars = 'BCFGJLQRSTUVXYZ23456789';

    private spelAlphabet: Object = {
        'A': 'Anna',
        'B': 'Bernard',
        'C': 'Cornelis',
        'D': 'Dirk',
        'E': 'Eduard',
        'F': 'Ferdinand',
        'G': 'Gerard',
        'H': 'Hendrik',
        'I': 'Izak',
        'J': 'Jan',
        'K': 'Karel',
        'L': 'Lodewijk',
        'M': 'Maria',
        'N': 'Nico',
        'O': 'Otto',
        'P': 'Pieter',
        'Q': 'Quotiënt',
        'R': 'Rudolf',
        'S': 'Simon',
        'T': 'Teunis',
        'U': 'Utrecht',
        'V': 'Victor',
        'W': 'Willem',
        'X': 'Xantippe',
        'Y': 'Y-grec',
        'Z': 'Zaandam'
    };

    // Index is symptomatic true or false
    symptomatic = true;

    // symptomaticDateOffset differs when index is symptomatic or asymptomatic. Value is configurable, default is 0
    private symptomaticIndexDateOffset = 0;
    private asymptomaticIndexDateOffset = 0;

    // The selected (and thus displayed) date in the page after user has selected a date from the datepicker
    selectedDate: Date = null;
    startDateOfTekInclusion: Date = null;
    startOfInfectiousPeriodDate: Date = null;

    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    isSymptomatic(symptomatic: boolean = false) {
        this.symptomatic = symptomatic;
    }

    getDisplayDate() {
        let date = this.selectedDate;
        if (date) {
            date = new Date(this.selectedDate.valueOf());
            date.setDate(date.getDate() - (this.symptomatic ? this.symptomaticIndexDateOffset : this.asymptomaticIndexDateOffset));
        }
        this.startDateOfTekInclusion = this.selectedDate;
        return date;
    }

    getFriendlySymptomsDate(format: string = 'EE. d MMM - ') {
        return this.dateHelper.getFriendlyDate(this.getDisplayDate(), format);
    }

    public InfectionConfirmationIdValid() {
        return (this.GGDKeyJoined().length === 7 && this.validateCharacters());
    }

    public InfectionConfirmationIdToTaalString() {
        let output = '';
        this.GGDKey.forEach((c, index) => {
            if (index === 3 || index === 5) {
                output += ' – ';
            }
            if (this.spelAlphabet[c]) {
                output += '<b>' + c + '</b>' + ' (' + this.spelAlphabet[c] + ')';
            } else {
                output += '<b>' + c + '</b>';
            }
            output += ' ';
        });
        return output;
    }

    GGDKeyJoined() {
        return this.GGDKey.join('').trim().toUpperCase();
    }

    validateCharacters(): boolean {
        const matchArray: RegExpMatchArray = this.GGDKeyJoined().match('^[' + this.allowedChars + ']+$');
        return matchArray && matchArray.length > 0;
    }
}
