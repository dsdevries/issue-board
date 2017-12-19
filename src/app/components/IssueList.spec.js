import React from 'react';
import TestUtils from 'react-addons-test-utils';
import IssueList from './IssueList';

function setup(propOverrides) {
  const props = Object.assign({
    issues: [
      {
        title: 'Test Issue',
        id: 0
      }, {
        title: 'Run the tests',
        id: 1
      }
    ]
  }, propOverrides);

  const renderer = TestUtils.createRenderer();
  renderer.render(<IssueList {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('IssueList', () => {
    it('should render container', () => {
      const {output} = setup();
      expect(output.type).toBe('ul');
      expect(output.props.className).toBe('issue-list');
    });

    describe('issue list', () => {
      it('should render', () => {
        const {output, props} = setup();
        const [, list] = output.props.children;
        expect(list.type).toBe('ul');
        expect(list.props.children.length).toBe(2);
        list.props.children.forEach((item, i) => { // eslint-disable-line max-nested-callbacks
          expect(item.type).toBe('li');
          expect(item.props.issue).toBe(props.issues[i]);
        });
      });
    });
  });
});
