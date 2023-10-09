/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IComponent{
  title: string
}


class Component <T extends IComponent> {
  constructor (public props :T) {

  }
}

class  Page <T extends IComponent> extends Component<T> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};