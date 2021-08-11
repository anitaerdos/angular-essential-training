import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // two properties: name-> name used in our template and pure -> helps define if a pipe is stateless or stateful
    name: 'categoryList',
    //pure: true -> because pure it is not needed // pipe will take in data and will return data without any side effects
})
export class CategoryListPipe implements PipeTransform {
    transform(mediaItems) {
        const categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        return categories.join(', ');
    }
}