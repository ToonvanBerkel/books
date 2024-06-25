const Book = ({ title, image, author }) => {
  const styles = {
    container: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px',
      textAlign: 'center',
      width: '200px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px 5px 0 0',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0'
    },
    author: {
      color: 'gray',
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <img src={image} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.author}>{author}</p>
    </div>
  );
}

export default Book;