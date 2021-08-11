import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  // name = "The Redemption";
  // wasWatched = () => true;
  // @Input("mediaItemToWatch") mediaItem; // not the best property binding if it is not a must use the following one, in () that is an alias
  @Input() mediaItem;
  @Output() delete = new EventEmitter(); // exposing an event that can be subscribed to a custom component just like native DOM events

  onDelete = () =>{
    console.log("deleted");
    this.delete.emit(this.mediaItem);
  }
}
