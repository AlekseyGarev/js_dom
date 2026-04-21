/**
 * @jest-environment jsdom
 */

test('Гоблин должен успешно создаться в DOM-дереве', () => {
    document.body.innerHTML = '<div id="board"><div class="cell"></div></div>';
    
    const goblin = document.createElement('img');
    goblin.classList.add('character-img');
    
    const cell = document.querySelector('.cell');
    cell.appendChild(goblin);
  
    const goblinInDom = cell.querySelector('.character-img');
    
    expect(goblinInDom).not.toBeNull();
    expect(goblinInDom.tagName).toBe('IMG');
  });