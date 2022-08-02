import './App.css'

const Discussions = ({ discussions }) => {
  return (
    <section className="discussion--section">
      <ul>
        {discussions.edges.map((edge) => {
          return (
            <li className="discussion--li" key={edge.node.id}>
              <div className='left--avatar--wrapper'>
                <img
                className='avatar'
                  src={edge.node.author.avatarUrl}
                  alt={edge.node.author.login}
                />
              </div>
              <div className='middle--title--wrapper'>
                <div className='category'>{`[${edge.node.category.name}]`}</div>
                <h3 className='title'>
                  <a href={edge.node.url}>{edge.node.title}</a>
                </h3>
                <div className='author--info'>
                    {`
                        ${edge.node.author.login} /
                        ${new Date(
                            edge.node.createdAt
                            ).toLocaleTimeString()}
                            `}
                </div>
              </div>
              <div className='right--check--wrapper'>
                <p className='check'>{edge.node.answer ? '답변완료' : '답변대기'}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Discussions;
