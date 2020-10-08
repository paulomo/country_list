import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ColorSchemeService } from '../color-scheme.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

    public themes = [
        {
            name: 'dark',
            icon: 'brightness_3'
        },
        {
            name: 'light',
            icon: 'wb_sunny'
        }
    ];

    constructor(public colorSchemeService: ColorSchemeService) {
    }

    setTheme(theme: string) {
        this.colorSchemeService.update(theme);
    }

}