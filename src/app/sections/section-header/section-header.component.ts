import { Component } from "@angular/core";
import { LOGOS } from "@models/constants/assets";
import { HEADER_ITEMS } from "@models/constants/header-items";

@Component({
    selector: 's-header',
    templateUrl: './section-header.component.html',
    host: {
        'class': 's-header'
    }
})
export class SectionHeaderComponent {
    protected readonly HEADER_ITEMS = HEADER_ITEMS;

    protected readonly LOGO = LOGOS.YT;
}