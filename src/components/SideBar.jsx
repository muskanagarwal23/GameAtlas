import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setTags,
  setReleaseYear,
  setPopularity,
  resetFilters,
} from "../store/slices/filterSlice";
import { Accordion, Form, Button, Offcanvas } from "react-bootstrap";


const Sidebar = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const genres = [
    "Action", "Adventure", "RPG", "Strategy", "Shooter",
    "Puzzle", "Racing", "Sports", "Horror", "Simulation", "Fighting",
  ];
  const tags = ["Multiplayer", "Singleplayer", "Co-op", "Open-World", "Story-driven"];

  const toggleOffcanvas = () => setShow(!show);
  const closeOffcanvas = () => setShow(false);

  const SidebarContent = () => (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Genre</Accordion.Header>
          <Accordion.Body>
            <Form.Select
              value={filters.category || ""}
              onChange={(e) => dispatch(setCategory(e.target.value))}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </Form.Select>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Tags</Accordion.Header>
          <Accordion.Body>
            {tags.map((tag) => (
              <Form.Check
                key={tag}
                label={tag}
                type="checkbox"
                checked={filters.tags.includes(tag)}
                onChange={(e) =>
                  dispatch(
                    setTags(
                      e.target.checked
                        ? [...filters.tags, tag]
                        : filters.tags.filter((t) => t !== tag)
                    )
                  )
                }
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Release Year</Accordion.Header>
          <Accordion.Body>
            <Form.Select
              value={filters.releaseYear || ""}
              onChange={(e) => dispatch(setReleaseYear(e.target.value))}
            >
              <option value="">Any</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </Form.Select>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Popularity</Accordion.Header>
          <Accordion.Body>
            <Form.Select
              value={filters.popularity || ""}
              onChange={(e) => dispatch(setPopularity(e.target.value))}
            >
              <option value="">Any</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Form.Select>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="mt-3 text-center">
        <Button variant="danger" onClick={() => dispatch(resetFilters())}>
          Reset Filters
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Toggle button for mobile - now a minimal menu icon */}
      <div className="d-md-none position-absolute top-0 start-0 p-2 mobile-menu-btn">
        <Button
          variant="light"
          size="sm"
          onClick={toggleOffcanvas}
          className="border-0"
          style={{ fontSize: "1.5rem", lineHeight: "1", padding: "0.25rem 0.5rem" }}
        >
          &#9776;
        </Button>
      </div>

      {/* Static sidebar for md+ screens */}
      <div className="d-none d-md-block sidebar p-3  rounded shadow">
        <h4 className="mb-3">Filter & Sort</h4>
        <SidebarContent />
      </div>

      {/* Offcanvas for small screens only */}
      {show && (
        <div className="d-md-none">
          <Offcanvas show={show} onHide={closeOffcanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter & Sort</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SidebarContent />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      )}
    </>
  );
};

export default Sidebar;
