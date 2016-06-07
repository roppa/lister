#Lister

##Convert a POJO or JSON object into an html or markdown list

This started as a template helper - taking a nested JSON object and presenting it as an unordered list.

    it('should add a class to an ul list', () => {
      let arr = [1, 2, 3];
      expect(l(arr, { ulClass: 'my-ul-class' })).to.eql('<ul class="my-ul-class"><li>1</li><li>2</li><li>3</li></ul>');
    });

