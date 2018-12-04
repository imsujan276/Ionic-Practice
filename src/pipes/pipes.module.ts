import { NgModule } from '@angular/core';
import { GroupByPipe } from './group-by/group-by';
import { CustomDatePipe } from './custom-date/custom-date';
import { SortByPipe } from './sort-by/sort-by';
@NgModule({
	declarations: [
    GroupByPipe,
    CustomDatePipe,
    SortByPipe],
	imports: [],
	exports: [
    GroupByPipe,
    CustomDatePipe,
    SortByPipe]
})
export class PipesModule {}
