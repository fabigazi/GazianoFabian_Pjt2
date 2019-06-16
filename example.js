var gl;
var points;
var pointArray;
var colors;

var program;
var theta = 0;
var xtrans = 0

function main()
{
	// Retrieve <canvas> element
	var canvas = document.getElementById('webgl');

	// Get the rendering context for WebGL
	gl = WebGLUtils.setupWebGL(canvas);

	//Check that the return value is not null.
	if (!gl)
	{
		console.log('Failed to get the rendering context for WebGL');
		return;
	}

	// Initialize shaders
	program = initShaders(gl, "vshader", "fshader");
	gl.useProgram(program);

	//Set up the viewport
    gl.viewport( 0, 0, canvas.width, canvas.height );

		pointArray = [];
		pointArray.push(vec4(-0.5, -0.5, -0.5, 1.0));
    pointArray.push(vec4(0.5, -0.5, -0.5, 1.0));
    pointArray.push(vec4(0.5, 0.5, -0.5, 1.0));
		pointArray.push(vec4(-0.5, 0.5, -0.5, 1.0));
		pointArray.push(vec4(-0.5, -0.5, 0.5, 1.0));
		pointArray.push(vec4(0.5, -0.5, 0.5, 1.0));
		pointArray.push(vec4(0.5, 0.5, 0.5, 1.0));
		pointArray.push(vec4(-0.5, 0.5, 0.5, 1.0));

		console.log(pointArray);


    //Define the positions of our points
    points = [];
		points.push(pointArray[3]);
		points.push(pointArray[2]);
		points.push(pointArray[1]);
		points.push(pointArray[3]);
		points.push(pointArray[1]);
		points.push(pointArray[0]);
		points.push(pointArray[6]);
		points.push(pointArray[7]);
		points.push(pointArray[4]);
		points.push(pointArray[6]);
		points.push(pointArray[4]);
		points.push(pointArray[5]);
		points.push(pointArray[5]);
		points.push(pointArray[1]);
		points.push(pointArray[2]);
		points.push(pointArray[5]);
		points.push(pointArray[2]);
		points.push(pointArray[6]);
		points.push(pointArray[0]);
		points.push(pointArray[4]);
		points.push(pointArray[7]);
		points.push(pointArray[0]);
		points.push(pointArray[7]);
		points.push(pointArray[3]);
		points.push(pointArray[6]);
		points.push(pointArray[2]);
		points.push(pointArray[3]);
		points.push(pointArray[6]);
		points.push(pointArray[3]);
		points.push(pointArray[7]);
		points.push(pointArray[4]);
		points.push(pointArray[0]);
		points.push(pointArray[1]);
		points.push(pointArray[4]);
		points.push(pointArray[1]);
		points.push(pointArray[5]);


    var pBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program,  "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    //Define the colors of our points
    colors = [];
    colors.push(vec4(1.0, 1.0, 1.0, 1.0));
    colors.push(vec4(1.0, 1.0, 1.0, 1.0));
    colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
    colors.push(vec4(1.0, 1.0, 1.0, 1.0));
    colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));
		colors.push(vec4(1.0, 1.0, 1.0, 1.0));


		var pointSizeLoc = gl.getUniformLocation(program, "vPointSize");
		gl.uniform1f(pointSizeLoc, 10);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);



    var vColor = gl.getAttribLocation(program,  "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);





		var thisProj = perspective(30, 1, .1, 100);

		var projMatrix = gl.getUniformLocation(program, "projMatrix");
		gl.uniformMatrix4fv(projMatrix, false, flatten(thisProj));


		// Set clear color
		gl.clearColor(0.0, 0.0, 0.0, 1.0);

		gl.enable(gl.DEPTH_TEST);





		render();

}

var id;

function render(){

	theta += 1;
	//xtrans +=.0005;

	var eye = vec3(1.5, 2.0, 2.5);
	var at = vec3(0.0, 0.0, 0.0);
	var up = vec3(0.0, 1.0, 0.0);

	var viewMatrix = lookAt(eye, at, up);


	var rotMatrixX = rotateX(theta);
	var rotMatrixY = rotateY(0);
	var rotMatrixZ = rotateZ(0);
	var translateMatrix = translate(xtrans, 0, 0);
	var ctMatrix = mult(mult(mult(translateMatrix, rotMatrixX), rotMatrixY), rotMatrixZ);

	var modelMatrixLoc = gl.getUniformLocation(program, "modelMatrix");
	gl.uniformMatrix4fv(modelMatrixLoc, false, flatten(ctMatrix));

	var viewMatrixLoc = gl.getUniformLocation(program, "viewMatrix");
	gl.uniformMatrix4fv(viewMatrixLoc, false, flatten(viewMatrix));



	// Clear <canvas> by clearning the color buffer
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	// Draw a point
	gl.drawArrays(gl.LINE_LOOP, 0, 3);
	gl.drawArrays(gl.LINE_LOOP, 3, 3);
	gl.drawArrays(gl.LINE_LOOP, 6, 3);
	gl.drawArrays(gl.LINE_LOOP, 9, 3);
	gl.drawArrays(gl.LINE_LOOP, 12, 3);
	gl.drawArrays(gl.LINE_LOOP, 15, 3);
	gl.drawArrays(gl.LINE_LOOP, 18, 3);
	//console.log(points);
	//console.log(colors);
	gl.drawArrays(gl.LINE_LOOP, 21, 3);
	gl.drawArrays(gl.LINE_LOOP, 24, 3);
	gl.drawArrays(gl.LINE_LOOP, 27, 3);
	gl.drawArrays(gl.LINE_LOOP, 30, 3);
	gl.drawArrays(gl.LINE_LOOP, 33, 3);

	requestAnimationFrame(render);
}
