import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addNewCategory } from '../../services/api';

function AddCategoryModal({ show, handleClose }) {
    const [categoryData, setCategoryData] = useState({
        name: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await addNewCategory(categoryData);
            console.log('New category created:', response.data);
            handleClose();
            window.location.reload(); 
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category name"
                                name="name"
                                value={categoryData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formImageUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder="Enter image URL"
                                name="imageUrl"
                                value={categoryData.imageUrl}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" className='mt-3' type="submit">
                            Create Category
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

function Example() {
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

    const handleShowAddCategoryModal = () => setShowAddCategoryModal(true);
    const handleCloseAddCategoryModal = () => setShowAddCategoryModal(false);

    return (
        <>
            <Button variant="primary" className='rounded-pill' onClick={handleShowAddCategoryModal}>
                Add Category
            </Button>
            <AddCategoryModal show={showAddCategoryModal} handleClose={handleCloseAddCategoryModal} />
        </>
    );
}

export default Example;
