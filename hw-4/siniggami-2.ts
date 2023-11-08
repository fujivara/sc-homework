export class Vector {
  constructor(private components: number[]) {}

  add(vector: Vector): Vector {
    if (vector.components.length !== this.components.length) {
      throw new Error();
    }
    return new Vector(this.components.map((el: number, i: number) =>  el + vector.components[i]));
  }

  subtract(vector: Vector): Vector {
    if (vector.components.length !== this.components.length) {
      throw new Error();
    }
    return new Vector(this.components.map((el: number, i: number) => el - vector.components[i]));
  }

  dot(vector: Vector): number {
    if (vector.components.length !== this.components.length) {
      throw new Error();
    }
    return this.components
      .map((el: number, i: number) => el * vector.components[i])
      .reduce((prev: number, curr: number) => prev + curr, 0);
  }

  norm(): number {
    let sum = 0;
    for (let i = 0; i < this.components.length; i++) {
      sum += Math.pow(this.components[i], 2);
    }
    return Math.sqrt(sum);
  }

  toString(): string {
    return `(${this.components})`;
  }

  equals(vector: Vector): boolean {
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] !== vector.components[i]) {
        return false;
      }
    }
    return true;
  }
}

