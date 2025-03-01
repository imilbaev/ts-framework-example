class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Something bad")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor):void {
  const method = desc.value;

  desc.value = function() {
    try {
      method();
    } catch(error) {
      console.log(error);
    }
  }
}