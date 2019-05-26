/*
 * Copyright (c) 2016-2018  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 *
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

/* global screen */

import QRServer from './qr-server'
import drawQR from './draw-qr'
import Poco from 'commodetto/Poco'

const render = new Poco(screen)
const qrServer = new QRServer()

qrServer.onQRChange = (qr) => {
  drawQR(qr, render)
}