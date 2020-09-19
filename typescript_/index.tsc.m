  class MathematicalOperation{

    @ChangetoAdd()
    substraction2(a: number, b: number)
    {
        a = a+a+a;
        b = b+b+b;
        a = a/3;
        b = b/3;
        var result = a - b;
        console.log(result);
    }
  };

  function ChangetoAdd() {
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
        console.log("Wykorzystano dekorator");
        descriptor.value = function (...args: any[]) {
            var a = args[0];
            var b = args[1];
            var result = a + b;
            console.log(result);
        }
    }
  }
