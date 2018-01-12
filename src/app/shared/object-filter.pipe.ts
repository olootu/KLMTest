import { Pipe, PipeTransform } from '@angular/core';

import { Flights } from './flights';

@Pipe({
    name: 'objectfilter',
    pure: false
})
export class ObjectFilterPipe implements PipeTransform {
 transform(value: any, args?: any[]): Object[] {
        const keyArr: any[] = Object.keys(value);
            const dataArr = [];
            const keyName = args[0];

        keyArr.forEach((key: any) => {
            value[key][keyName] = key;
            dataArr.push(value[key]);
        });

        if (args[1] ) {
            dataArr.sort( ( a: Object, b: Object ): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }

        return dataArr;
    }
}
